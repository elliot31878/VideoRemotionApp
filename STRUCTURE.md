# Project Structure

```
.
├── gen                      > Generated api packages using openapi-generator
│   └── config               > Configuration file to generate each api package
├── public                   > Static public assets (not imported anywhere in source code)
│   └── index.html           > Main HTML page template for app
├── src                      > Application source code
│   ├── api                  > Instances of api packages to send and recieve data
│   ├── assets               > Assets of project to import and use dynamically
│   ├── auth                 > Implement of OIDC client to authorize users in ids
│   ├── components           > Global Reusable Components
│   ├── constants            > Constants and configs used in project
│   ├── contexts             > React contexts implemented to handle global states
│   ├── Hooks                > React hooks implemented to handle services
│   ├── layouts              > Constant and shared structures between different pages
│   ├── pages                > Components associated with routes
│   ├── routes               > Main route definitions and async split points
│   │   ├── AppRoutes.jsx    > Bootstrap main application routes
│   │   └── PrivateRoute.jsx > Wrapper for pages which authenticate is need to view them
│   ├── theme                > Application-wide styles and theme implemented using Mui
│   ├── utils                > Basic and re-usable functions
│   ├── ...
└── └── index.jsx           > Application bootstrap and rendering with
```
