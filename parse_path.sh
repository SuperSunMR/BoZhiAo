FILE_LIST=('index.html' 'about.html' 'about3.html' 'about4.html' 'plist.html' \
           'news.html' 'about2.html' 'about5.html' 'about6.html' 'about7.html' \
           'product.html' 'product1.html' 'product2.html' 'product3.html' 'product4.html' 'product5.html' \
           'product6.html' 'product7.html' 'product8.html' 'product9.html' 'line.html'\
           'messages.html'\
           'index-en.html' 'about-en.html' 'about3-en.html' 'about4-en.html' 'plist-en.html'\
           'news-en.html' 'about2-en.html' 'about5-en.html' 'about6-en.html' 'about7-en.html' \
           'messages-en.html')

for(( i=0;i<${#FILE_LIST[@]};i++)) do
    echo ${FILE_LIST[i]};
    if [[ ! -f  ${FILE_LIST[i]} ]]; then
        echo "${FILE_LIST[i]} is not exist!";
        continue;
    fi
    sed -i 's/src="\//src=".\//g' ${FILE_LIST[i]}
    sed -i 's/href="\//href=".\//g' ${FILE_LIST[i]}
    sed -i 's/href=".\/"/href=".\/index.html"/g' ${FILE_LIST[i]}
done;


#sed -i 's/src="\//src=".\//g' about4.html
#sed -i 's/href="\//href=".\//g' about4.html