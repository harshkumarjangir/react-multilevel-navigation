import { useMemo } from 'react';
import navbarData from '../data/navbarData.json';

export function useNavbar() {
    const menu = useMemo(() => {
        // Transform the navbarData structure to match the expected format
        return navbarData
            .filter(item => item.status && !item.deletedAt)
            .sort((a, b) => a.index - b.index)
            .map(item => ({
                _id: item._id.$oid,
                title: item.name,
                slug: item.slug,
                // Map submenu to children (Level 2)
                children: item.submenu
                    ?.filter(sub => sub.status)
                    .sort((a, b) => a.index - b.index)
                    .map(sub => ({
                        _id: sub._id?.$oid,
                        name: sub.name,
                        slug: sub.slug,
                        // Map subcategories to nested children (Level 3)
                        children: sub.subcategories
                            ?.filter(subcat => subcat.status)
                            .sort((a, b) => a.index - b.index)
                            .map(subcat => ({
                                _id: subcat._id?.$oid,
                                name: subcat.name,
                                slug: subcat.slug,
                                // Map items to final level (Level 4)
                                items: subcat.items
                                    ?.filter(itm => itm.status)
                                    .map(itm => ({
                                        _id: itm._id?.$oid,
                                        name: itm.name,
                                        slug: itm.slug
                                    })) || []
                            })) || []
                    })) || []
            }));
    }, []);


    return menu;
}
