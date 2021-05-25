function removeTags(str) {
    if ((str === null) || (str === ''))
        return false;

    else
        str = str.toString();
    return str.replace(/(<[^]+)>)/ig, '');

}

document.getElementById("demo").innerHTML = (removeTags('<p><strong><em>SkillSanta Assignments</em ></strong ></p >'));