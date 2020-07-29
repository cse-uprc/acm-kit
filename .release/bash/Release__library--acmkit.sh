cd C:/Users/sambu/OneDrive/Desktop/acmkit

echo "---------------------------------------------"
echo "Beginning Release ..."
echo ''

echo "Pulling Latest Changes ..."
git checkout master
git fetch
git pull
echo ''

echo "Creating Release Branch ..."
git checkout -b "ACMKIT-RELEASE-BRANCH-$RANDOM"
echo ''

echo "Bumping Version ..."
node .release/js/version__bump.js
echo ''

echo "Building Library ..."
npm run acmbuild
echo ''

echo "Bundling Styles ..."
cp -r style/ dist/acmkit-lib/style
echo ''

echo "Pushing Branch ..."
git add .
git commit -m "ACMKIT: Incremental Release -- version bump"
git push -u origin HEAD
echo ''

echo "Switching to master ..."
git checkout master
echo ''

echo "---------------------------------------------"
echo ''

read -s -n 1 -p "Branch Release Complete!"
