import os

base_dir = r"c:\Users\Hype GLK\Documents\portofolio-main\public"
print(f"Checking directory: {base_dir}")
files = os.listdir(base_dir)
print(f"Found {len(files)} files/folders")

for f in files:
    if ' ' in f:
        old = os.path.join(base_dir, f)
        new = os.path.join(base_dir, f.replace(' ', '-'))
        print(f"Attempting rename: '{old}' -> '{new}'")
        try:
            os.rename(old, new)
            print("Success")
        except Exception as e:
            print(f"Failed: {e}")

# Check subdirectories
for sub in ['logo', 'certificates']:
    sub_dir = os.path.join(base_dir, sub)
    if os.path.exists(sub_dir):
        print(f"Checking subdirectory: {sub_dir}")
        for f in os.listdir(sub_dir):
            if ' ' in f:
                old = os.path.join(sub_dir, f)
                new = os.path.join(sub_dir, f.replace(' ', '-'))
                print(f"Attempting rename: '{old}' -> '{new}'")
                try:
                    os.rename(old, new)
                    print("Success")
                except Exception as e:
                    print(f"Failed: {e}")
