import MyBaseModel from 'src/models/helpers/MyBaseModel';
import Brand from 'src/models/orm-api/Brand';
import User from 'src/models/orm-api/User';
import Category from 'src/models/orm-api/Category';
import Gender from 'src/models/orm-api/Gender';

export default class Product extends MyBaseModel {
    static entity = 'product';
    static entityUrl = '/api/products';
    static primaryKey = 'id';
    static titleKey = 'id';
    static entityHumanName = 'Product';
    static openRecord(pVal, item, router){
      router.push({
        name: '/lists/products/:rId/:rName',
        params: {
          rId: pVal,
          rName: pVal,
        },
      })
    }

    static parentWithables = [
        'brand',
        'gender',
        'category',
        'seller',
        'buyer'
    ];

    static rules = {
        readables: () => true,
        readable: (item) => true,
        editable: (item) => true,
        creatable: () => true,
    };
    
    
    static hooks = {
        createComplete: (response) => {
        },
    };

    static fieldsMetadata = {
        'id': {},
            'name': {},
            'description': {},
            'price': {},
            'image': {},
            'purchase_date': {},
            'created_at': {},
            'updated_at': {},
            'brand_id': { linkablesRule: () => { return {} } },
            'gender_id': { linkablesRule: () => { return {} } },
            'category_id': { linkablesRule: () => { return {} } },
            'seller_id': { linkablesRule: () => { return {} } },
            'buyer_id': { linkablesRule: () => { return {} } }
    };

    static fields() {
        return {
            'id': this.attr(''),
            'name': this.attr(''),
            'description': this.attr('').nullable(),
            'price': this.attr(''),
            'image': this.attr('').nullable(),
            'purchase_date': this.attr(''),
            'created_at': this.attr('').nullable(),
            'updated_at': this.attr('').nullable(),
            'brand_id': this.attr(''),
            'gender_id': this.attr(''),
            'category_id': this.attr(''),
            'seller_id': this.attr(''),
            'buyer_id': this.attr(''),
            'brand': this.belongsTo(Brand, 'brand_id'),
            'buyer': this.belongsTo(User, 'buyer_id'),
            'category': this.belongsTo(Category, 'category_id'),
            'gender': this.belongsTo(Gender, 'gender_id'),
            'seller': this.belongsTo(User, 'seller_id')
        };
    }

    static FetchAll(relationships = [], flags = {}, moreHeaders = {}, options = { page: 1, limit: 15, filters: {}, clearPrimaryModelOnly: false }) {
        return this.customSupabaseApiFetchAll(
            `${this.baseUrl}${this.entityUrl}`,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders),
            options,
            this
        );
    }

    static FetchById(id, relationships = [], flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiFetchById(
            `${this.baseUrl}${this.entityUrl}`,
            id,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders),
            this
        );
    }

    static Store(entity, relationships = [], flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiStore(
            `${this.baseUrl}${this.entityUrl}`,
            entity,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders),
            this
        );
    }

    static Update(entity, relationships = [], flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiUpdate(
            `${this.baseUrl}${this.entityUrl}`,
            entity,
            [...this.parentWithables, ...relationships],
            flags,
            this.mergeHeaders(moreHeaders),
            this
        );
    }

    static Delete(entityId, flags = {}, moreHeaders = {}) {
        return this.customSupabaseApiDelete(
            `${this.baseUrl}${this.entityUrl}`,
            entityId,
            flags,
            this.mergeHeaders(moreHeaders),
            this
        );
    }
}