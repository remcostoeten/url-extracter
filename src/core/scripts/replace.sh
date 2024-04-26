#!/bin/bash

# Replace "@\/lib\/utils" with "@\/core\/lib\/utils"
find . -type f -not -path '*/node_modules/*' -not -path '*/.next/*' -exec sed -i 's#"@\/lib\/utils"#"@\/core\/lib\/utils"#g' {} +

# Replace "@\/utils\/cn" with "@\/core\/lib\/utils"
find . -type f -not -path '*/node_modules/*' -not -path '*/.next/*' -exec sed -i 's#"@\/utils\/cn"#"@\/core\/lib\/utils"#g' {} +

echo "String replacement completed!"
