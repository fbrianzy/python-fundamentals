import argparse

def main():
    parser = argparse.ArgumentParser(description="Simple greeter")
    parser.add_argument("name", help="your name")
    parser.add_argument("-u", "--uppercase", action="store_true", help="uppercase the greeting")
    args = parser.parse_args()
    msg = f"Hello, {args.name}!"
    print(msg.upper() if args.uppercase else msg)

if __name__ == "__main__":
    main()
