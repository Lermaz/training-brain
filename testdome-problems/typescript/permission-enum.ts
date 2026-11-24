enum Permission {
    Read = 1 << 0,    // 1
    Write = 1 << 1,   // 2
    Execute = 1 << 2, // 4
}

const PERMISSION_FLAGS = [
    Permission.Read,
    Permission.Write,
    Permission.Execute,
] as const;

function getPermissionList(permission: Permission): string[] {
    return PERMISSION_FLAGS
        .filter((flag) => (permission & flag) === flag)
        .map((flag) => Permission[flag]);
}

console.log(getPermissionList(Permission.Read | Permission.Write | Permission.Execute));
// ["Read", "Write", "Execute"]
