from rest_framework.routers import DefaultRouter
from products.viewsets import ProductGenericViewset

router = DefaultRouter()
router.register('products-abc', ProductGenericViewset, basename='products')

print(router.urls)
urlpatterns = router.urls