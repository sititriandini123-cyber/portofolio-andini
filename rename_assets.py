import os

def rename_files(directory):
    for root, dirs, files in os.walk(directory):
        for filename in files:
            if ' ' in filename:
                old_path = os.path.join(root, filename)
                new_filename = filename.replace(' ', '-')
                new_path = os.path.join(root, new_filename)
                print(f"Renaming: {old_path} -> {new_path}")
                try:
                    os.rename(old_path, new_path)
                except Exception as e:
                    print(f"Error renaming {old_path}: {e}")

if __name__ == "__main__":
    rename_files("public")
