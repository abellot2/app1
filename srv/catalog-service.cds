using app1.db as db from '../db/data-model';

service CatalogService
{
    entity Books as projection on db.Books;
	
    entity TestTable as projection on db.TestTable; 
};