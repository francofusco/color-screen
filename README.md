Locally hosting the website:

```
cd ~/path/to/this/folder
python -m http.server
```

To view the website on a phone, check the IP of the PC with `ifconfig` and look for the ip under `inet`. Then, from the phone go to `http://<pc-ip>:8000` (assuming that the website is howted on port `8000`) **while connected to the same WiFi**.
