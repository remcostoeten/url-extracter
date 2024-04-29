#!/bin/bash

# Get the script's absolute path
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# Replace "@\/lib\/utils" with absolute path to "@\/core\/lib\/utils"
find . -type f -exec sed -i 's#"@\/lib\/utils"#'"$SCRIPT_DIR"/core\/lib\/utils"#g' {} +

# Replace "@\/utils\/cn" with absolute path to "@\/core\/lib\/utils"
find . -type f -exec sed -i 's#"@\/utils\/cn"#'"$SCRIPT_DIR"/core\/lib\/utils"#g' {} +

echo "String replacement completed!"
