context app1.db {

    entity Books {
      key ID : Integer;
      name : String;
    };

    entity TestTable {
      col : String;
    };
}

@cds.persistence.exists 
@cds.persistence.calcview 
entity CV_SESSION_INFO {
key     ITEM: String(512)  @title: 'ITEM: ITEM' ; 
        VALUE: String(512)  @title: 'VALUE: VALUE' ; 
}