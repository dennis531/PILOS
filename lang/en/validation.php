<?php

return [
    'accepted'       => 'The :attribute must be accepted.',
    'active_url'     => 'The :attribute is not a valid URL.',
    'after'          => 'The :attribute must be a date after :date.',
    'after_or_equal' => 'The :attribute must be a date after or equal to :date.',
    'alpha'          => 'The :attribute must only contain letters.',
    'alpha_dash'     => 'The :attribute must only contain letters, numbers, dashes and underscores.',
    'alpha_num'      => 'The :attribute must only contain letters and numbers.',
    'array'          => 'The :attribute must be an array.',
    'attributes'     => [
        'access_code'                        => 'Access code',
        'address'                            => 'Adress',
        'age'                                => 'Age',
        'allow_guests'                       => 'Allow guests',
        'allow_listing'                      => 'Room search allowed',
        'allow_membership'                   => 'Allow new members',
        'available'                          => 'Available',
        'banner_background'                  => 'Background color of the banner',
        'banner_color'                       => 'Text color of the banner',
        'banner_enabled'                     => 'Show',
        'banner_icon'                        => 'Icon',
        'banner_link'                        => 'Link to show after the message',
        'banner_link_style'                  => 'Link style',
        'banner_link_target'                 => 'Link target',
        'banner_link_text'                   => 'Link text',
        'banner_message'                     => 'Message',
        'banner_title'                       => 'Title',
        'base_url'                           => 'API endpoint',
        'bbb_skip_check_audio'               => 'Disable echo audio test',
        'city'                               => 'City',
        'color'                              => 'Color',
        'content'                            => 'Content',
        'country'                            => 'Country',
        'current_password'                   => 'Current password',
        'date'                               => 'Date',
        'day'                                => 'Day',
        'default_presentation'               => 'Default presentation',
        'default_role'                       => 'Default role',
        'default_timezone'                   => 'Default timezone',
        'description'                        => 'Description',
        'duration'                           => 'Max. duration',
        'email'                              => 'Email',
        'everyone_can_start'                 => 'Everyone can start the meeting',
        'excerpt'                            => 'Excerpt',
        'file'                               => 'File',
        'first_name'                         => 'First name',
        'firstname'                          => 'Firstname',
        'gender'                             => 'Gender',
        'help_url'                           => 'Help page',
        'hour'                               => 'Hour',
        'icon_text'                          => 'Icon text',
        'last_name'                          => 'Last name',
        'lastname'                           => 'Lastname',
        'legal_notice_url'                   => 'Legal notice',
        'listed'                             => 'Include in room search',
        'lobby'                              => 'Waiting room',
        'lock_settings_disable_cam'          => 'Disable webcam',
        'lock_settings_disable_mic'          => 'Disable microphone',
        'lock_settings_disable_note'         => 'Disable editing of notes',
        'lock_settings_disable_private_chat' => 'Disable private chat',
        'lock_settings_disable_public_chat'  => 'Disable public chat',
        'lock_settings_hide_user_list'       => 'Hide list of participants',
        'lock_settings_lock_on_join'         => 'Enabled restrictions',
        'max_participants'                   => 'Max. participants',
        'minute'                             => 'Minute',
        'mobile'                             => 'Mobile',
        'month'                              => 'Month',
        'mute_on_start'                      => 'Mute microphone on join',
        'name'                               => 'Name',
        'new_password'                       => 'New password',
        'new_password_confirmation'          => 'New password confirmation',
        'password'                           => 'Password',
        'password_confirmation'              => 'Password confirmation',
        'password_change_allowed'            => 'Give local users the possibility to change their password',
        'permissions'                        => 'Permissions',
        'phone'                              => 'Phone',
        'privacy_policy_url'                 => 'Privacy policy',
        'restrict'                           => 'Restrict usage',
        'role'                               => 'Role',
        'roles'                              => 'Roles',
        'room_limit'                         => 'Room limit',
        'room_token_expiration'              => 'Expiration time for personalized room links',
        'room_type'                          => 'Room type',
        'salt'                               => 'API secret',
        'second'                             => 'Second',
        'server_pool'                        => 'Server pool',
        'servers'                            => 'Server',
        'sex'                                => 'Sex',
        'size'                               => 'Size',
        'strength'                           => 'Server strength',
        'time'                               => 'Time',
        'timezone'                           => 'Timezone',
        'title'                              => 'Title',
        'updated_at'                         => 'Updated at',
        'user'                               => 'User',
        'user_emails'                        => 'Email list',
        'user_locale'                        => 'Language',
        'username'                           => 'Username',
        'webcams_only_for_moderator'         => 'Only moderators can see the webcam',
        'welcome'                            => 'Welcome message',
        'year'                               => 'Year',
    ],
    'before'          => 'The :attribute must be a date before :date.',
    'before_or_equal' => 'The :attribute must be a date before or equal to :date.',
    'between'         => [
        'array'   => 'The :attribute must have between :min and :max items.',
        'file'    => 'The :attribute must be between :min and :max kilobytes.',
        'numeric' => 'The :attribute must be between :min and :max.',
        'string'  => 'The :attribute must be between :min and :max characters.',
    ],
    'boolean'          => 'The :attribute field must be true or false.',
    'confirmed'        => 'The :attribute confirmation does not match.',
    'current_password' => 'The current password is incorrect.',
    'custom'           => [
        'banner' => [
            'array' => 'The message banner settings are missing!',
            'icon'  => [
                'regex' => 'The icon css class should be in the following format: `fa-solid fa-camera`.',
            ],
            'required' => 'The message banner settings are missing!',
        ],
        'color'             => ':attribute must be a color specified as a hexadecimal number (z. B. #fff oder #ffffff)!',
        'invalid_room_type' => 'You have not the necessary permissions to have a room with the passed room type.',
        'locale'            => [
            'in' => 'The selected language isn\'t supported by the server.',
        ],
        'password'              => 'The password must contain at least one character from each of the following four categories: Uppercase letter (A - Z), lowercase letter (a - z), number (0 - 9), non-alphanumeric character (for example: !, $, #, or %).',
        'replacement_room_type' => [
            'exists'   => 'Replacement room type invalid! A replacement room type is required because rooms are still assigned to this room type.',
            'not_in'   => 'Replacement room type invalid! A replacement room type is required because rooms are still assigned to this room type.',
            'required' => 'Replacement room type required! Rooms are still assigned to this room type.',
        ],
        'roles' => [
            '*' => [
                'distinct' => 'At least one role was provided multiple times.',
                'exists'   => 'One of the selected roles does not exist.',
            ],
        ],
        'room' => [
            'already_member'            => 'The user is already member of the room.',
            'not_member'                => 'The user ":firstname :lastname" isn\'t a member.',
            'self_delete'               => 'The user is not allowed to delete himself.',
            'self_edit'                 => 'The user is not allowed to edit himself.',
            'several_users_found_email' => 'Several users were found with this email',
            'user_not_found_email'      => 'No user was found with this email',
        ],
        'servers' => [
            '*' => [
                'distinct' => 'The server with the ID :input was selected more than once.',
                'exists'   => 'The server with the ID :input could not be found.',
            ],
        ],
        'user' => [
            'exists' => 'The selected user could not be found.',
        ],
        'user_emails' => [
            '*' => [
                'email' => ':input is not a valid email.',
            ],
        ],
    ],
    'date'           => 'The :attribute is not a valid date.',
    'date_equals'    => 'The :attribute must be a date equal to :date.',
    'date_format'    => 'The :attribute does not match the format :format.',
    'different'      => 'The :attribute and :other must be different.',
    'digits'         => 'The :attribute must be :digits digits.',
    'digits_between' => 'The :attribute must be between :min and :max digits.',
    'dimensions'     => 'The :attribute has invalid image dimensions.',
    'distinct'       => 'The :attribute field has a duplicate value.',
    'email'          => 'The :attribute must be a valid email address.',
    'ends_with'      => 'The :attribute must end with one of the following: :values.',
    'exists'         => 'The selected :attribute is invalid.',
    'file'           => 'The :attribute must be a file.',
    'filled'         => 'The :attribute field must have a value.',
    'gt'             => [
        'array'   => 'The :attribute must have more than :value items.',
        'file'    => 'The :attribute must be greater than :value kilobytes.',
        'numeric' => 'The :attribute must be greater than :value.',
        'string'  => 'The :attribute must be greater than :value characters.',
    ],
    'gte' => [
        'array'   => 'The :attribute must have :value items or more.',
        'file'    => 'The :attribute must be greater than or equal :value kilobytes.',
        'numeric' => 'The :attribute must be greater than or equal :value.',
        'string'  => 'The :attribute must be greater than or equal :value characters.',
    ],
    'image'    => 'The :attribute must be an image.',
    'in'       => 'The selected :attribute is invalid.',
    'in_array' => 'The :attribute field does not exist in :other.',
    'integer'  => 'The :attribute must be an integer.',
    'ip'       => 'The :attribute must be a valid IP address.',
    'ipv4'     => 'The :attribute must be a valid IPv4 address.',
    'ipv6'     => 'The :attribute must be a valid IPv6 address.',
    'json'     => 'The :attribute must be a valid JSON string.',
    'lt'       => [
        'array'   => 'The :attribute must have less than :value items.',
        'file'    => 'The :attribute must be less than :value kilobytes.',
        'numeric' => 'The :attribute must be less than :value.',
        'string'  => 'The :attribute must be less than :value characters.',
    ],
    'lte' => [
        'array'   => 'The :attribute must not have more than :value items.',
        'file'    => 'The :attribute must be less than or equal :value kilobytes.',
        'numeric' => 'The :attribute must be less than or equal :value.',
        'string'  => 'The :attribute must be less than or equal :value characters.',
    ],
    'max' => [
        'array'   => 'The :attribute must not have more than :max items.',
        'file'    => 'The :attribute must not be greater than :max kilobytes.',
        'numeric' => 'The :attribute must not be greater than :max.',
        'string'  => 'The :attribute must not be greater than :max characters.',
    ],
    'mimes'     => 'The :attribute must be a file of type :values.',
    'mimetypes' => 'The :attribute must be a file of type :values.',
    'min'       => [
        'array'   => 'The :attribute must have at least :min items.',
        'file'    => 'The :attribute must be at least :min kilobytes.',
        'numeric' => 'The :attribute must be at least :min.',
        'string'  => 'The :attribute must be at least :min characters.',
    ],
    'multiple_of'          => 'The :attribute must be a multiple of :value.',
    'not_in'               => 'The selected :attribute is invalid.',
    'not_regex'            => 'The :attribute format is invalid.',
    'numeric'              => 'The :attribute must be a number.',
    'password'             => 'The password is incorrect.',
    'present'              => 'The :attribute field must be present.',
    'prohibited'           => 'The :attribute field is prohibited.',
    'prohibited_if'        => 'The :attribute field is prohibited when :other is :value.',
    'prohibited_unless'    => 'The :attribute field is prohibited unless :other is in :values.',
    'regex'                => 'The :attribute format is invalid.',
    'required'             => 'The :attribute field is required.',
    'required_if'          => 'The :attribute field is required when :other is :value.',
    'required_unless'      => 'The :attribute field is required unless :other is in :values.',
    'required_with'        => 'The :attribute field is required when :values is present.',
    'required_with_all'    => 'The :attribute field is required when :values are present.',
    'required_without'     => 'The :attribute field is required when :values is not present.',
    'required_without_all' => 'The :attribute field is required when none of :values are present.',
    'same'                 => 'The :attribute and :other must match.',
    'size'                 => [
        'array'   => 'The :attribute must contain :size items.',
        'file'    => 'The :attribute must be :size kilobytes.',
        'numeric' => 'The :attribute must be :size.',
        'string'  => 'The :attribute must be :size characters.',
    ],
    'starts_with'     => 'The :attribute must start with one of the following: :values.',
    'string'          => 'The :attribute must be a string.',
    'timezone'        => 'The :attribute must be a valid timezone.',
    'unique'          => 'The :attribute has already been taken.',
    'uploaded'        => 'The :attribute failed to upload.',
    'url'             => 'The :attribute must be a valid URL.',
    'uuid'            => 'The :attribute must be a valid UUID.',
    'validname'       => ':attribute contains the following non-permitted characters: :chars',
    'validname_error' => ':attribute contains non-permitted characters',
];
