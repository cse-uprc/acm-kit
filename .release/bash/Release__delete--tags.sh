cd C:/Users/sambu/OneDrive/Desktop/acm-kit
echo "---------------------------------------------"
echo "Beginning Deletion of Tags ..."
echo ''

echo "Deleting Local Tags ..."
git tag -d $(git tag -l)
echo ''

echo "Fetching Remote Tags ..."
git fetch
echo ''

echo "Deleting Remote Tags ..."
git push origin --delete $(git tag -l)
echo ''

echo "Deleting Local Cache ..."
git tag -d $(git tag -l)
echo ''

echo "Delete Finishing ..."
echo "---------------------------------------------"
echo ''
read -s -n 1 -p "Tags Deleted!"
