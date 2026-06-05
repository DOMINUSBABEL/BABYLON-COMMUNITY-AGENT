# Puppeteer Extra Stealth profile injection config
def get_stealth_args(profile_path):
    return [
        f"--user-data-dir={profile_path}",
        "--disable-blink-features=AutomationControlled",
        "--use-fake-codec-for-media-stream"
    ]
