from flask import Flask

app=Flask(__name__)

@app.route('/')
def home():
    return "Hello Web Server"
@app.route('/about')
def about():
    return "This is the About Page"
@app.route('/print')
def print_message(): 
    print("This is Printed in the Terminal")  # This prints in terminal
    return "Printed a message in the server terminal"  # This shows in browser
@app.route('/user/<username>')
def user_name(username):
    return f"Hello {username}"

@app.route('/post/<int:id>')
def post_id(id):
    return f"This post has the id: {id}"

if __name__== "__main__":
    app.run(debug=True)