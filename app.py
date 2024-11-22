from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Simulando um banco de dados em memória
topics = []

@app.route('/topics', methods=['GET'])
def get_topics():
    return jsonify(topics)

@app.route('/topics', methods=['POST'])
def create_topic():
    data = request.json
    if not data.get('title') or not data.get('content'):
        return jsonify({'error': 'Título e conteúdo são obrigatórios'}), 400
    topic = {
        'id': len(topics) + 1,
        'title': data['title'],
        'content': data['content']
    }
    topics.append(topic)
    return jsonify(topic), 201

if __name__ == '__main__':
    app.run(debug=True)
