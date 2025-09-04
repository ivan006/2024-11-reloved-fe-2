import { createStore } from 'vuex'
import VuexORM from '@vuex-orm/core'

import { DBCrudCacheSet } from 'wizweb-fe';

import User from 'src/models/User'
import Session from 'src/models/Session'
import RouteLineage  from "src/models/RouteLineage";
import Brand from "src/models/orm-api/Brand";
import Category from "src/models/orm-api/Category";
import Gender from "src/models/orm-api/Gender";
import Product from "src/models/orm-api/Product";


// Initialize the database
import { Database } from '@vuex-orm/core'
const database = new Database()

// Register models
database.register(DBCrudCacheSet);

database.register(User)
database.register(Session)
database.register(RouteLineage)

database.register(Brand);
database.register(Category);
database.register(Gender);
database.register(Product);


// Create Vuex store
const store = createStore({
  plugins: [VuexORM.install(database)]
})

export default store
