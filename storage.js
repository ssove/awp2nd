const NO_KEY = -2;
const NO_VALUE = -1;

function clearLocalStorage( window ) {
    if ( window.localStorage ) {
        localStorage.clear();
    }
}

function getIndexOf( key, value ) {
    let values = localStorage.getItem( key );

    if ( !values ) {
        console.log( "getIndexOf(): No key named \"" + key + "\"");
        return NO_KEY;
    } else {
        values = values.split( "," );

        for ( let i = 0; i < values.length; ++i ) {
            if ( values[i] === value ) {
                return i;
            }
        }

        console.log( "getIndexOf(): Invalid value \"" + value + "\"");
        return NO_VALUE;
    }
}

function getCount( userKey, userName ) {
    let countKey = "count",
        count = localStorage.getItem( countKey ),
        userNameIdx = getIndexOf( userKey, userName );

    if ( userNameIdx === NO_KEY || userNameIdx === NO_VALUE ) {
        return -1;
    }

    count = count.split( "," );

    return count[userNameIdx];
}

function setCount( countKey, count, idx ) {
    let counts = localStorage.getItem( countKey ).split( "," );

    if ( !counts ) {
        console.log( "setCount(): No key named \"" + countKey + "\"" );
        counts = [];
    } else if ( !counts.length ) {
        console.log( "setCount(): No value in \"" + countKey + "\"" );
    } else if ( idx < 0 || idx >= counts.length ) {
        console.log( "setCount(): Invalid index" );
    } else {
        counts[idx] = count;
        localStorage.setItem( counts.join() );
    }

    return;
}
