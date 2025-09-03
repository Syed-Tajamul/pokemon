CREATE TABLE `todos` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`email_verified` integer NOT NULL,
	`email` text NOT NULL,
	`email_verified_at` text,
	`password` text,
	`phone` text,
	`phone_verified_at` text,
	`image` text,
	`ip` text,
	`last_login_ip` text,
	`last_login_at` text,
	`refresh_token` text,
	`suspended_at` text,
	`suspension_reason` text,
	`role` text DEFAULT 'user' NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);