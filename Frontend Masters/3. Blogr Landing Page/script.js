// !Créating the collapsible from W3S

var coll = document.getElementsByClassName('collapsible');
for(i in coll) {
    coll[i].addEventListener('click', function() {
        this.classList.toggle('active');
        var content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    })
}