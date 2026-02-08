import { createClient } from '@supabase/supabase-js';
import process from 'process';
import fs from 'fs';
import path from 'path';

const logFile = path.resolve(process.cwd(), 'debug_output.txt');
const log = (msg) => {
    fs.appendFileSync(logFile, msg + '\n');
    console.log(msg);
};

// Clear log file
if (fs.existsSync(logFile)) fs.unlinkSync(logFile);

log("Starting debug script...");

try {
    const envPath = path.resolve(process.cwd(), '.env');
    if (!fs.existsSync(envPath)) {
        log("Error: .env file not found at " + envPath);
        process.exit(1);
    }

    const envContent = fs.readFileSync(envPath, 'utf8');
    const envVars = {};
    envContent.split('\n').forEach(line => {
        const [key, value] = line.split('=');
        if (key && value) {
            envVars[key.trim()] = value.trim().replace(/^"/, '').replace(/"$/, '');
        }
    });

    const supabaseUrl = envVars.VITE_SUPABASE_URL;
    const supabaseKey = envVars.VITE_SUPABASE_PUBLISHABLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
        log("Error: Missing Supabase URL or Key in .env");
        process.exit(1);
    }

    log("Supabase URL: " + supabaseUrl);
    log("Supabase Key length: " + (supabaseKey ? supabaseKey.length : 0));

    const supabase = createClient(supabaseUrl, supabaseKey);

    log("Client created. Fetching products...");

    try {
        const { data, error } = await supabase
            .from("products")
            .select(`
              id,
              title
            `)
            .limit(1);

        if (error) {
            log("Error fetching products: " + JSON.stringify(error, null, 2));
        } else {
            log("Success! Data length: " + (data ? data.length : 0));
            if (data && data.length > 0) {
                log("First product: " + JSON.stringify(data[0]));
            } else {
                log("Data is empty array.");
            }
        }
    } catch (err) {
        log("Exception during fetch: " + err.message);
    }

} catch (err) {
    log("Top level exception: " + err.message);
}
log("Done.");
