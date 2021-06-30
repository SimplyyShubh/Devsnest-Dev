from flask import Flask

app = Flask(__name__)

userList = []

@app.route("/")
def home():
    return "<H1>Hey there</H1>"

@app.route("/add/<string:username>")
def add(username):
    userList.append(username)
    return f"<H1>added {username}</H1>"

@app.route("/userShow")
def show():
    for x in userList:
        print("asdasd")
    return f"{' '.join(userList)}"


if __name__ == "__main__":
    app.run()