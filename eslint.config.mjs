import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'prettier',
    'plugin:tailwindcss/recommended'
  ),
  {
    rules: {
      'tailwindcss/no-custom-classname': [
        'error',
        {
          whitelist: ['text-muted-foreground'],
        },
      ],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    },
  },
];

export default eslintConfig;