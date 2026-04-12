# Functions in TypeScript

Welcome to functions in TypeScript! In this exercise, you will practice your new skills in TypeScript!

### Configuration

1. Clone the repository to your local machine:

```bash
$ git clone https://your-repository-url.git
$ cd your-repository-directory
```

2. Once cloned, install dependencies:

```bash
npm install
```

3. You can run the compiler from the root using the command`tsc`. With the configuration that was defined.

The `tsc` will compile all the files inside of the root folder (`/exercises`), generating the `.js` compiled files in the dist folder.

You can also use the `script` called `tsc`:

```bash
npm run tsc
```

If you want, you can compile the files individually, but be aware that this will bypass the configuration, meaning you need to indicate the outDir in the command:

```bash
npx tsc exercises/ex01.ts --outDir dist
```

4. After compiling the files, use `node` to run the files.

```bash
node dist/ex01.js
```

## Running Tests

Each exercise has its own test file located in the "tests" folder. To run the tests for a specific exercise, you can use the corresponding script provided in the package.json file.

For example, to run the tests for exercise 1:

```bash
npm test ex01.test.ts
```

Replace "01" with the exercise number you want to test.

To run ALL the testes, run the command:

```bash
npm test
```

This command will run ALL the tests at same time.

## Attention

Don't change the name of the functions because the tests are linked to the functions names.

Happy codding! 🎉
