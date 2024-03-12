import algoliasearch_django as algoliasearch
from algoliasearch_django import AlgoliaIndex
from algoliasearch_django.decorators import register
from .models import Product


@register(Product)
class ProductIndex(AlgoliaIndex):
    #should_index = 'is_public'
    fields = [
        'title',
        'body',
        'price',
        'public',
        'user',
        'path',
        'endpoint'
    ]
    settings = {
        'searchableAttributes': ['title', 'body'],
        'attributesForFaceting': ['user', 'public']
    }
    tags = 'get_tags_list'
#algoliasearch.register(Product)