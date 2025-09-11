import http from 'k6/http';
import { check, sleep } from 'k6';
import { options, BASE_URL } from './config/options.js';
import { loginPayload } from './data/payloads.js';
import { headers } from './utils/headers.js';

export { handleSummary } from './reportHandler.js';
export { options };

export default function () {
    const res = http.post(`${BASE_URL}/user/login`, loginPayload, { headers });

    console.log('Response:', res.body);

    let body = {};
    try {
        body = res.json();
    } catch (e) {
        console.error('Failed to parse JSON:', e);
    }

    check(res, {
        'status is 200': (r) => r.status === 200,
        'has role': (r) => body.role === 'Admin',
    });

    sleep(1);
}
