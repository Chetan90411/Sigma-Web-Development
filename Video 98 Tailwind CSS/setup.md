## How to setup Tailwind CSS

Step 1: Run the following commands

```
npm install -D tailwindcss
npx tailwindcss init 
```

Step 2: Update Tailwind.config.js file to include the following line:

```
content: ["*.html"]
```
Step 3: Create src/input.css to include : 

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Step 4: Include the output.css file to your html

Step 5: Run the following command in Terminal:

```
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch
```