function clearLocalStorage( window ) {
    if ( window.localStorage ) {
        localStorage.clear();
    }
}

function getIndexOf( key, value ) {
    var values = localStorage.getItem( key );

    if ( !values ) {
        console.log( "getIndexOf(): No key named \"" + key + "\"");
        return -2;
    } else {
        values = values.split( "," );

        for ( var i = 0; i < values.length; ++i ) {
            if ( values[i] === value ) {
                return i;
            }
        }

        console.log( "getIndexOf(): Invalid value \"" + value + "\"");
        return -1;
    }
}

function getCount( userKey, userName ) {
    var countKey = "count",
        count = localStorage.getItem( countKey ),
        userNameIdx = getIndexOf( userKey, userName );

    if ( userNameIdx === -1 || userNameIdx === -2 ) {
        return;
    }

    count = count.split( "," );

    return count[userNameIdx];
}

function setCount( userKey, userName, countKey, count ) {
    var userNameIdx = getIndexOf( userKey, userName ),
        users,
        counts;

    if ( userNameIdx === -2 ) {
        users = [userName];
        counts = [1];

    } else if ( userNameIdx === -1 ) {
        users = localStorage.getItem( userKey );
        counts = localStorage.getItem( countKey );
        users.push( userName );
        counts.push( 1 );
    } else {
        counts = localStorage.getItem( countKey );
        counts[userNameIdx] = parseInt( count[userNameIdx] ) + count;
    }

    localStorage.setItem( userKey, users.join() );
    localStorage.setItem( countKey, counts.join() );
}
