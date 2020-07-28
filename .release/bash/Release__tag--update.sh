cd C:/Users/sambu/OneDrive/Desktop/acmkit

echo "---------------------------------------------"
echo "Begin Creation of New tag"
echo ''

echo "Pulling latest build ..."
git checkout master
git fetch
git pull
echo ''

echo "Getting Latest version tag ..."
PACKAGE_VERSION=$(cat ../projects/acmkit-lib/package.json | grep \\\"version\\\" | head -1 | awk -F: '{ print $2 }' | sed 's/[\",]//g' | tr -d '[[:space:]]')
echo "Latest Version: $PACKAGE_VERSION"
echo ''

echo "Creating Tag ..."
git tag v$PACKAGE_VERSION
git push --tags

read -s -n 1 -p "Tag Release Complete!"
