from rest_framework import permissions
from .permissions import IsStaffEditorPermission

class StaffEditorPermissionMixin():
    permission_classes = [IsStaffEditorPermission, permissions.IsAdminUser]

class UserQuerySetMixin():
    user_field = 'user'
    allow_staff_view = False
    def get_queryset(self, *args,**kwargs):
        user = self.request.user
        lookup_data = {}
        lookup_data[self.user_field] = user
        if self.allow_staff_view and user.is_staff:
            return qs
        qs = super().get_queryset(*args,**kwargs)
        return qs.filter(**lookup_data)
