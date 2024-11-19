import MyBaseModel from 'src/models/helpers/MyBaseModel';
import Product from 'src/models/orm-api/Product';

export default class Gender extends MyBaseModel {
    static entity = 'gender';
    static entityUrl = '/api/gender-s';
    static primaryKey = 'id';
    static titleKey = 'id';
    static entityHumanName = 'Gender';
    static openRecord(pVal, item, router){
      router.push({
        name: '/lists/gender-s/:rId/:rName',
        params: {
          rId: pVal,
          rName: pVal,
        },
      })
    }

    static parentWithables = [
        
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
            'created_at': {},
            'updated_at': {}
    };

    static fields() {
        return {
            'id': this.attr(''),
            'name': this.attr(''),
            'created_at': this.attr('').nullable(),
            'updated_at': this.attr('').nullable(),
            'products': this.hasMany(Product, 'gender_id')
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