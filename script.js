import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 200,
  duration: '120s',
  rps: 200
};

export default function() {
    http.get("http://127.0.0.1:3003/9005000/sizes");
    sleep(1);
};