import csv, json, os, re, jinja2

def main():
    with open('./repair_tag_data.csv', newline='',encoding="utf-8", errors='ignore') as csvfile:
        reader = csv.DictReader(csvfile)
        tag_list = []
        for row in reader:
            # for cnt in range(1,10):
            for cnt in range(1,9): # Ignore tag_9 because no detail
                if row['repair_tag_'+str(cnt)] == "TRUE":
                    tag = {}
                    tag['shop_name'] = row['shop_name']
                    tag['repair_tag'] = cnt
                    tag['min_price'] = row['min_price_'+ str(cnt)]
                    tag['spend_time'] = row['spend_time_'+ str(cnt)]
                    tag['note'] = row['note_'+ str(cnt)]
                    tag_list.append(tag)
    
    dir = './RepairCommunity/datafiles/shop/'
    for root, dirs, files in os.walk(dir):
        for file in files:
            f = open(dir+file, encoding="utf-8")
            data = json.load(f)
            for tag in tag_list:
                if data['name'] == tag['shop_name']:
                    file_name = re.search(r"(.*).json", file).group(1)
                    output_name = "./json/" + file_name + "_tag_" + str(tag['repair_tag']) + ".json"
                    tag['shop_id'] = int(re.search(r"shop_(.*)", file_name).group(1))
                    loader = jinja2.FileSystemLoader(searchpath="./")
                    jenv = jinja2.Environment(loader=loader)
                    template = jenv.get_template('tag_template.txt')
                    jsonOut = template.render(data=tag)
                    f = open(output_name, "w", encoding="utf-8")
                    f.write(jsonOut)
                    f.close

if __name__ == '__main__':
    main()