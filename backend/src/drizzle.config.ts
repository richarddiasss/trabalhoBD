import type {Config} from 'drizzle-kit';

export default {
    schema: ".src/db/schema.ts",
    out: "./drizzle",
    dialect: "mysql",
    
} satisfies Config;