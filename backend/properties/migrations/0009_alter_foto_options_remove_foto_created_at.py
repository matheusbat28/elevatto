# Generated by Django 5.0.4 on 2024-05-07 04:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('properties', '0008_alter_foto_created_at'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='foto',
            options={'verbose_name': 'Foto', 'verbose_name_plural': 'Fotos'},
        ),
        migrations.RemoveField(
            model_name='foto',
            name='created_at',
        ),
    ]
