import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupType } from '../prisma/group-type.enum';

@InputType()
export class GroupGroupTypeNameCompoundUniqueInput {

    @Field(() => GroupType, {nullable:false})
    groupType!: keyof typeof GroupType;

    @Field(() => String, {nullable:false})
    name!: string;
}
