# Generated by Django 3.0.8 on 2020-07-28 05:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hotel_partner', '0006_auto_20200727_1817'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='hotelpartners',
            name='breakfast',
        ),
        migrations.RemoveField(
            model_name='hotelpartners',
            name='capacity',
        ),
        migrations.RemoveField(
            model_name='hotelpartners',
            name='description',
        ),
        migrations.RemoveField(
            model_name='hotelpartners',
            name='featured',
        ),
        migrations.RemoveField(
            model_name='hotelpartners',
            name='pet',
        ),
        migrations.RemoveField(
            model_name='hotelpartners',
            name='price',
        ),
        migrations.RemoveField(
            model_name='hotelpartners',
            name='size',
        ),
        migrations.RemoveField(
            model_name='hotelpartners',
            name='type_of',
        ),
        migrations.AddField(
            model_name='imagesofhotels',
            name='breakfast',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
        migrations.AddField(
            model_name='imagesofhotels',
            name='capacity',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='imagesofhotels',
            name='description',
            field=models.TextField(default=''),
        ),
        migrations.AddField(
            model_name='imagesofhotels',
            name='featured',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
        migrations.AddField(
            model_name='imagesofhotels',
            name='pet',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
        migrations.AddField(
            model_name='imagesofhotels',
            name='price',
            field=models.IntegerField(blank=True, default=100, null=True),
        ),
        migrations.AddField(
            model_name='imagesofhotels',
            name='size',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='imagesofhotels',
            name='type_of',
            field=models.CharField(blank=True, choices=[('Single', 'single'), ('dobule', 'dobule'), ('family', 'family'), ('presidential', 'presidential')], default=1, max_length=20, null=True),
        ),
    ]