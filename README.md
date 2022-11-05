# RepaireCommunity

## What is RepaireCommunity?
RepaireCommunity is a mono-repo for the RepaireCommunity project. It contains the following packages:
- `api` - The API for the RepaireCommunity project was developed using Strapi
- `frontend-app` - The frontend application for the RepaireCommunity project was developed using NextJS
- `tool` - The tool for the RepaireCommunity project. It is a CLI tool for processing data.

## Development

### Pre-requisites
- NodeJS (v16)
- Npm (v6)
- Vscode

#### VSCode workspace
For developing RepaireCommunity, we recommend using the VSCode workspace.

1. Git clone the repo
2. Open the repo in VSCode
3. Navigate to `.vscode/api.code-workspace` and open it
4. Click open workspace

<img width="1440" alt="image" src="https://user-images.githubusercontent.com/1377991/200118244-40780a80-a581-4a9a-becb-28ae197aa545.png">


#### Frontend-app
1. Navigate to `frontend-app`
2. Run `npm install`
3. Create file called `.env.local` in the root of the `frontend-app` directory with content below
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:1337
```
4. Run `npm run dev`

#### API
1. Navigate to `api`
2. Run `npm install`
3. Run `npm run develop`
