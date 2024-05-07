from django.db import models

class Foto(models.Model):
    foto = models.ImageField(upload_to='fotos')
    
    def __str__(self):
        return f'{self.id}'
    
    class Meta:
        verbose_name = 'Foto'
        verbose_name_plural = 'Fotos'
        ordering = []

class Properties(models.Model):
    title = models.CharField('Título', max_length=100)
    description = models.TextField('Descrição')
    bedrooms = models.PositiveIntegerField('Quartos')
    bathrooms = models.PositiveIntegerField('Banheiros')
    parking = models.PositiveIntegerField('Vagas de Garagem')
    area = models.DecimalField('Área', max_digits=5, decimal_places=2)
    photos = models.ManyToManyField(Foto, blank=True)
    created_at = models.DateTimeField('Criado em', auto_now_add=True)
    updated_at = models.DateTimeField('Atualizado em', auto_now=True)
    price = models.DecimalField('Preço', max_digits=10, decimal_places=2)

    class Meta:
        verbose_name = 'Propriedade'
        verbose_name_plural = 'Propriedades'
        ordering = ('created_at',)

    def __str__(self):
        return self.title
