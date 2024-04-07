<template>
  <div>
    <div
      class="card card-compact bg-secondary shadow-xl md:col-span-1 sns-card"
    >
      <div class="card-body">
        <h1 class="card-title">Profile</h1>
        <div class="flex flex-row">
          <input
            name="username"
            type="text"
            placeholder="Username"
            autocomplete="off"
            :class="`input input-bordered
        w-full mb-2 mr-1`"
          />
          <button class="btn">Update Username</button>
        </div>
        <div class="flex flex-row">
          <input
            name="displayname"
            type="text"
            placeholder="Displayname"
            autocomplete="off"
            :class="`input input-bordered
        w-full mb-2 mr-1`"
          />
          <button class="btn">Update Displayname</button>
        </div>
        <div class="flex flex-row">
          <textarea
            name="bio"
            :class="`textarea textarea-bordered w-full mr-1`"
            autocomplete="off"
            placeholder="Bio"
          ></textarea>
          <button class="btn h-[100px]">Update Bio</button>
        </div>
        <div class="flex flex-row justify-between">
          <div>
            <h3 class="font-bold">Current Avatar:</h3>
            <div class="avatar">
              <div class="w-24 rounded-full">
                <img
                  src="https://api.dicebear.com/6.x/identicon/svg?seed=yeee&backgroundColor=c0aede,b6e3f4,d1d4f9,ffd5dc,ffdfbf"
                />
              </div>
            </div>
          </div>
          <div>
            <h3 class="font-bold">New Avatar:</h3>
            <div class="avatar">
              <div class="w-24 rounded-full">
                <img
                  src="https://api.dicebear.com/6.x/identicon/svg?seed=yee2e&backgroundColor=c0aede,b6e3f4,d1d4f9,ffd5dc,ffdfbf"
                />
              </div>
            </div>
          </div>
          <button class="btn self-center">Update Avatar</button>
        </div>
      </div>
    </div>
    <div
      class="card card-compact bg-secondary shadow-xl md:col-span-1 sns-card"
    >
      <div class="card-body">
        <h1 class="card-title">Account Information</h1>
        <p><b>Account Type: </b>Google OAuth</p>
        <p><b>Associated Email: </b>example@example.com</p>
        <p><b>Account Creation Date: </b>2038-01-19 03:14:07</p>
        <p><b>User ID: </b>sdjnsj,ncDJKWQNDKJWQNDYADAYADAyada</p>
        <p><b>Roles: </b>admin, mod, muted, banned</p>
      </div>
    </div>
    <div
      class="card card-compact bg-secondary shadow-xl md:col-span-1 sns-card"
    >
      <div class="card-body">
        <h1 class="card-title">Account Data</h1>
        <button :disabled="true" class="btn">Export Account Data</button>
        <button
          :disabled="user === undefined || user === null"
          class="btn btn-error"
          @click="deletingAccount = true"
        >
          Delete Account
        </button>
      </div>
    </div>
    <dialog :class="`modal ${deletingAccount ? 'modal-open' : ''}`">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Are you sure?</h3>
        <p class="py-4">
          This will delete ALL data related to your sticknodes.skin account.
          This includes but is not limited to <br />
        </p>
        <ul>
          <li>- Account metadata</li>
          <li>- Follows</li>
          <li>- Skins</li>
        </ul>
        <br />
        <p>This is irreversible. Proceed?</p>
        <br />
        <div class="flex flex-row justify-between">
          <button class="btn btn-outline" @click="deletingAccount = false">
            Cancel
          </button>
          <button class="btn btn-error" @click="deleteAccount()">
            Proceed
          </button>
        </div>
      </div>
      <form
        method="dialog"
        class="modal-backdrop"
        @submit="deletingAccount = false"
      >
        <button>close</button>
      </form>
    </dialog>
    <dialog :class="`modal ${reauth ? 'modal-open' : ''}`">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Reauthentication Required</h3>
        <p class="py-4">
          Reauthentication is required to perform this action. Please click the
          button below to reauthenticate and continue with the account deletion
          process.<br />
          <b
            >Account deletion will occur immediately after successfully
            reauthenticating.</b
          >
        </p>
        <button class="btn btn-error" @click="reauthWithGoogle()">
          Reauthenticate & Delete Account
        </button>
      </div>
      <form method="dialog" class="modal-backdrop" @submit="reauth = false">
        <button>close</button>
      </form>
    </dialog>
  </div>
</template>

<script setup lang="ts">
import {
  GoogleAuthProvider,
  deleteUser,
  reauthenticateWithRedirect,
} from "firebase/auth";

const user = useCurrentUser();

const deletingAccount = ref(false);
const reauth = ref(false);

function deleteAccount() {
  if (user.value)
    deleteUser(user.value)
      .then(() => {})
      .catch((err) => {
        console.log("delete", err);
        reauthenticateUser();
      });
  deletingAccount.value = false;
}

function reauthenticateUser() {
  deletingAccount.value = false;
  reauth.value = true;
}

function reauthWithGoogle() {
  reauth.value = false;
  if (user.value) {
    reauthenticateWithRedirect(user.value, new GoogleAuthProvider()).catch(
      (err) => console.log("reauth", err)
    );
    deleteAccount();
  }
}
</script>
