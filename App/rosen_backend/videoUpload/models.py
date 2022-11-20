from django.db import models

# Create your models here.
class VideoUpload(models.Model):
    caption=models.CharField(max_length=100)
    video=models.FileField(upload_to="videoUpload/%y")
    def __str__(self):
        return self.caption