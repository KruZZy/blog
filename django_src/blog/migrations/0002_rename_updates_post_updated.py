# Generated by Django 4.0.3 on 2022-04-08 14:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='post',
            old_name='updates',
            new_name='updated',
        ),
    ]
