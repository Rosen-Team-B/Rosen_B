FROM python:3.11

WORKDIR /BE
ENV PYTHONBUFFERED = 1

COPY BE/requirements.txt .

RUN pip install -r requirements.txt

COPY BE/ . 

EXPOSE 8000

CMD ["python3","manage.py","runserver"]