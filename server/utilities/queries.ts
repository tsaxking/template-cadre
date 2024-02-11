// This file was generated by a script, please do not modify it. If you see any problems, please raise an issue on https://github.com/tsaxking/webpack-template/issues

import { Accounts } from './tables.ts';
import { Members } from './tables.ts';
import { Roles } from './tables.ts';
import { AccountRoles } from './tables.ts';
import { Permissions } from './tables.ts';
import { Version } from './tables.ts';
import { Sessions } from './tables.ts';
import { AccountSettings } from './tables.ts';
import { Select_permissions_all } from './tables.ts';
import { Select_roles_from_name } from './tables.ts';
import { Delete_roles_delete } from './tables.ts';
import { Update_roles_update } from './tables.ts';
import { Insert_roles_new } from './tables.ts';
import { Select_roles_from_id } from './tables.ts';
import { Select_roles_all } from './tables.ts';
import { Delete_sessions_delete } from './tables.ts';
import { Delete_sessions_delete_all } from './tables.ts';
import { Update_sessions_update } from './tables.ts';
import { Insert_sessions_new } from './tables.ts';
import { Select_sessions_get } from './tables.ts';
import { Select_sessions_all } from './tables.ts';
import { Delete_member_delete } from './tables.ts';
import { Update_member_update_title } from './tables.ts';
import { Update_member_update_status } from './tables.ts';
import { Update_member_update_resume } from './tables.ts';
import { Update_member_remove_from_board } from './tables.ts';
import { Insert_member_new } from './tables.ts';
import { Update_member_update_bio } from './tables.ts';
import { Update_member_add_to_board } from './tables.ts';
import { Select_member_all } from './tables.ts';
import { Update_account_unverify } from './tables.ts';
import { Update_account_set_verification } from './tables.ts';
import { Delete_account_delete } from './tables.ts';
import { Select_account_unverified } from './tables.ts';
import { Update_account_change_password } from './tables.ts';
import { Insert_account_save_settings } from './tables.ts';
import { Select_account_from_username } from './tables.ts';
import { Update_account_update_picture } from './tables.ts';
import { Select_account_from_verification_key } from './tables.ts';
import { Select_account_verified } from './tables.ts';
import { Update_account_verify } from './tables.ts';
import { Select_account_get_settings } from './tables.ts';
import { Update_account_change_email } from './tables.ts';
import { Delete_account_remove_role } from './tables.ts';
import { Insert_account_add_role } from './tables.ts';
import { Select_account_from_email } from './tables.ts';
import { Insert_account_new } from './tables.ts';
import { Update_account_request_password_change } from './tables.ts';
import { Select_account_from_password_change } from './tables.ts';
import { Select_account_from_id } from './tables.ts';
import { Select_account_all } from './tables.ts';
import { Update_account_request_email_change } from './tables.ts';
import { Update_account_change_username } from './tables.ts';
import { Select_db_get_version } from './tables.ts';
import { Update_db_change_version } from './tables.ts';
import { Insert_db_init } from './tables.ts';

export type Queries = {
    'permissions/all': [[Select_permissions_all], Permissions];

    'permissions/from-role': [
        [
            {
                roleId: string;
            },
        ],
        Permissions,
    ];

    'permissions/remove-from-role': [
        [
            {
                roleId: string;
                permission: string;
            },
        ],
        unknown,
    ];

    'permissions/add-to-role': [
        [
            {
                roleId: string;
                permission: string;
            },
        ],
        unknown,
    ];

    'roles/from-name': [[Select_roles_from_name], Roles];

    'roles/delete': [[Delete_roles_delete], unknown];

    'roles/update': [[Update_roles_update], unknown];

    'roles/new': [[Insert_roles_new], unknown];

    'roles/from-id': [[Select_roles_from_id], Roles];

    'roles/all': [[Select_roles_all], Roles];

    'roles/from-username': [
        [
            {
                username: string;
            },
        ],
        Roles,
    ];

    'sessions/delete': [[Delete_sessions_delete], unknown];

    'sessions/delete-all': [[Delete_sessions_delete_all], unknown];

    'sessions/update': [[Update_sessions_update], unknown];

    'sessions/new': [[Insert_sessions_new], unknown];

    'sessions/get': [[Select_sessions_get], Sessions];

    'sessions/all': [[Select_sessions_all], Sessions];

    'sessions/sign-in': [
        [
            {
                id: string;
                accountId: string;
            },
        ],
        unknown,
    ];

    'sessions/sign-out': [
        [
            {
                id: string;
            },
        ],
        unknown,
    ];

    'member/delete': [[Delete_member_delete], unknown];

    'member/update-title': [[Update_member_update_title], unknown];

    'member/update-status': [[Update_member_update_status], unknown];

    'member/update-resume': [[Update_member_update_resume], unknown];

    'member/remove-from-board': [[Update_member_remove_from_board], unknown];

    'member/new': [[Insert_member_new], unknown];

    'member/update-bio': [[Update_member_update_bio], unknown];

    'member/add-to-board': [[Update_member_add_to_board], unknown];

    'member/all': [[Select_member_all], Members];

    'member/from-username': [
        [
            {
                username: string;
            },
        ],
        Members,
    ];

    'account/unverify': [[Update_account_unverify], unknown];

    'account/set-verification': [[Update_account_set_verification], unknown];

    'account/delete': [[Delete_account_delete], unknown];

    'account/unverified': [[Select_account_unverified], Accounts];

    'account/change-password': [[Update_account_change_password], unknown];

    'account/save-settings': [[Insert_account_save_settings], unknown];

    'account/from-username': [[Select_account_from_username], Accounts];

    'account/update-picture': [[Update_account_update_picture], unknown];

    'account/from-verification-key': [
        [Select_account_from_verification_key],
        Accounts,
    ];

    'account/verified': [[Select_account_verified], Accounts];

    'account/verify': [[Update_account_verify], unknown];

    'account/get-settings': [[Select_account_get_settings], AccountSettings];

    'account/change-email': [[Update_account_change_email], unknown];

    'account/remove-role': [[Delete_account_remove_role], unknown];

    'account/add-role': [[Insert_account_add_role], unknown];

    'account/from-email': [[Select_account_from_email], Accounts];

    'account/new': [[Insert_account_new], unknown];

    'account/request-password-change': [
        [Update_account_request_password_change],
        unknown,
    ];

    'account/from-password-change': [
        [Select_account_from_password_change],
        Accounts,
    ];

    'account/from-id': [[Select_account_from_id], Accounts];

    'account/all': [[Select_account_all], Accounts];

    'account/request-email-change': [
        [Update_account_request_email_change],
        unknown,
    ];

    'account/change-username': [[Update_account_change_username], unknown];

    'account/roles': [
        [
            {
                id: string;
            },
        ],
        Roles,
    ];

    'db/get-version': [[Select_db_get_version], Version];

    'db/change-version': [[Update_db_change_version], unknown];

    'db/delete-version': [[], unknown];

    'db/init': [[Insert_db_init], unknown];
    'db/delete-version': [[], unknown];
};
