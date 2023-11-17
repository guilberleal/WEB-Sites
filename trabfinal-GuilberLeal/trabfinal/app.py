from flask import Flask, render_template, url_for, json, jsonify, request, redirect, make_response
from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SubmitField, IntegerField
from flask_bootstrap import Bootstrap5
import requests
import json, os

app = Flask(__name__)
app.config['SECRET_KEY'] = 'hard to guess string'
boostrap = Bootstrap5(app)

class CharForm(FlaskForm):
	name = StringField('name')
	tags = SelectField('tags')
	submit = SubmitField('Enviar')

def getjson():
    SITE_ROOT = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(SITE_ROOT, "static/", "lol-champions.json")
    data = json.load(open(json_url))
    return data

champions = getjson()




@app.route('/',methods=['GET','POST'])
def home():
	pf = CharForm()
	charlist = list()
	
	if pf.validate_on_submit():
		for champ in champions:

			if ((pf.name.data).lower() in champ['name'].lower()) and getTag(pf.tags.data,champ['tags']):

				charlist.append(champ)

	return render_template('home.html', champions=charlist, form = pf)

@app.route('/catch',methods=["POST"])
def catch():
	req = request.get_json()
	charlist = list()
	for champ in champions:
			if (req['name'].lower() in champ['name'].lower()) and getTag(req['tags'],champ['tags']):
				charlist.append(champ)
	res = make_response(jsonify(charlist), 200)
	return res



def getTag(tag, selectTags):
	if tag in selectTags or  tag == '':
		return True
	else:
		return False


if __name__ == '__main__':
  app.run(debug=True)
