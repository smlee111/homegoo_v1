# Generated by Django 4.0.7 on 2023-01-10 10:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_customuser_isstaff_customuser_issuperuser'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='email',
            field=models.EmailField(max_length=254, unique=True, verbose_name='이메일 주소'),
        ),
    ]
