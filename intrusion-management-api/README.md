## Requirements
Python 30.10.0+

mariaDB 10.9.3

## Usage
```
python3 -m venv .venv

source .venv/bin/activate

pip install -r requirements.txt

uvicorn main:app --reload
```


ter um endpoint para receber informacao quando um intruso é detectado