# Users

It refer to the individuals who interact with the system, including roles such as product managers, content creators, marketers, and administrators, each with specific permissions and access levels for managing and maintaining product data.

### Steps to create Users in UnoPim

**Step 1:** It can be set on the admin panel by going to **Settings → Users**. Here you can create new users by clicking on the button **Create User** as shown in below image.

<ImagePopup src="/assets/3.0/images/settings/createUser.png" alt="Create User" />

**Step 2:** Now add the below fields

1) **Name -** Enter the name of the User.

2) **Email -** Enter the Email of the User.

3) **Password -** Enter the password of the user.

4) **UI Locale -** Select the language of the admin interface for this user.

5) **Catalog Locale -** The language this user writes catalog content in. Separate from their interface language — see [Catalog Locale and Default Channel](#catalog-locale-and-default-channel) below.

6) **Default Channel -** The channel UnoPim opens for this user by default.

7) **Timezone -** Select the timezone as per the user.

8) **Role -** Select the role of the user. You can only assign roles you are allowed to assign — see [Role assignment](#role-assignment) below.

9) **Status -** Enable the status of the user.

10) **Image -** You can also add the image of the user. If no image is uploaded, the user's Gravatar picture can be shown instead — see [Profile pictures](#profile-pictures-and-gravatar) below.

At Last, click on **Save User** button.

  <ImagePopup src="/assets/3.0/images/settings/saveUser.png" alt="User" />

**Step 3:** Now a new user is created successfully in the user datagrid as shown in the below image.

  <ImagePopup src="/assets/3.0/images/settings/userGrid.png" alt="User Grid" />

## Catalog Locale and Default Channel

Every user carries two personal catalog settings, separate from the interface language:

| Setting | What it does |
|---------|--------------|
| **Catalog Locale** | The language UnoPim opens when this user edits a product, and the language product names appear in on their grids. |
| **Default Channel** | The channel selected for this user by default when editing products and browsing grids. |

These settings follow the user everywhere: product editing, product grids, and background jobs that run on the user's behalf (such as imports and exports) all use them. Users can change their own values under **My Account**; administrators can set them here.

## Profile pictures and Gravatar

When a user has no uploaded profile image, UnoPim shows the [Gravatar](https://gravatar.com) picture linked to their email address. Each user can switch this off with the **Use Gravatar image** option — with it off and no image uploaded, UnoPim shows their initials instead.

## Role assignment

You can only assign roles that your own role permits. An administrator cannot grant a role that holds permissions they do not have themselves, and only an all-access administrator can assign another all-access role.

## Changing a password

Password confirmation is now only requested when you are actually changing a password. Updating a user's name, locale, or other profile details no longer asks you to confirm a password.

::: tip
API integrations get their own automatic "robot" users behind the scenes. Robot users never appear in this list and cannot sign in to the admin panel — the Users grid shows only real people.
:::

So by this you can easily create a Users in UnoPim.
