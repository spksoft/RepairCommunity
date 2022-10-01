import ShopDetail from '../components/shopDetail'

function shopList(shops){
    return(
        <div className="shopListContainer">
            <div className="Detail">shops </div>
            <shops
                .sort((a, b) => b.created_at.localeCompare(a.created_at))
                .map((shop, i) => (
                    <ShopDetail
                    shop={shop}
                    key={i}
                    />
            ))}
        </div>
    );
}
export default shopList;